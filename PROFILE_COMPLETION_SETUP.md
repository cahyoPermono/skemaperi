# Profile Completion Wizard Implementation

## Overview
Sistem profile completion wizard dirancang untuk mengumpulkan data kesehatan lengkap dari pengguna (Bunda) pada login pertama kali. Setelah pendaftaran, pengguna akan diarahkan ke wizard untuk melengkapi data pribadi sebelum dapat mengakses dashboard.

## Changes Made

### 1. Database Migration
**File:** `database/migrations/2025_11_28_000001_add_profile_fields_to_users_table.php`

Added new columns to users table:
- `tanggal_lahir` (date, nullable) - Date of birth
- `berat_badan` (decimal 5,2 in kg) - Weight in kilograms
- `tinggi_badan` (decimal 5,2 in cm) - Height in centimeters
- `lingkar_lengan` (decimal 5,2 in cm) - Upper arm circumference
- `hpht` (date, nullable) - Hari Pertama Haid Terakhir (Last menstruation date)
- `nomor_hp` (string, nullable) - WhatsApp phone number
- `profile_completed` (boolean, default false) - Profile completion flag
- Removed: `pregnancy_age_weeks` (now calculated from HPHT)

Migration was run successfully with: `php artisan migrate`

### 2. Backend Implementation

#### Model Update
**File:** `app/Models/User.php`

Added new fields to `$fillable` array:
- tanggal_lahir
- berat_badan
- tinggi_badan
- lingkar_lengan
- hpht
- nomor_hp
- profile_completed

#### Controller
**File:** `app/Http/Controllers/ProfileCompletionController.php`

Two methods:
- `show()` - Displays the profile completion wizard
- `store()` - Handles form submission with:
  - Form validation for all fields
  - Automatic calculation of pregnancy weeks from HPHT
  - User data update
  - Redirect to dashboard on success

**Validation Rules:**
- `tanggal_lahir`: required, valid date, must be in past
- `berat_badan`: required, numeric, between 30-200 kg
- `tinggi_badan`: required, numeric, between 130-220 cm
- `lingkar_lengan`: required, numeric, between 15-50 cm
- `hpht`: required, valid date, between 1 year ago and today
- `nomor_hp`: required, string, 10-15 characters

#### Middleware
**File:** `app/Http/Middleware/EnsureProfileCompleted.php`

- Checks if user has completed profile (`profile_completed` = true)
- Redirects to `profile.completion` route if not completed
- Registered as `ensure.profile.completed` in HTTP Kernel

### 3. Frontend Implementation

#### Register Form
**File:** `resources/js/Pages/Auth/Register.jsx`

Changes:
- Removed `pregnancy_age_weeks` field from 3-step form
- Added `nomor_hp` field in Step 2 (Location & WhatsApp Number)
- Updated form submission to not include pregnancy_age_weeks
- Updated to redirect to `profile.completion` after registration

Step 2 now includes:
- Location selection (Province → Regency → District)
- WhatsApp phone number input

#### Profile Completion Wizard
**File:** `resources/js/Pages/ProfileCompletion.jsx`

3-step wizard with real-time calculations:

**Step 1: Data Kesehatan Fisik (Physical Health Data)**
- Tanggal Lahir (Birth Date) → displays age in years
- Berat Badan (Weight in kg)
- Tinggi Badan (Height in cm)
- Lingkar Lengan Atas (Upper arm circumference in cm)
- Info box explaining importance of physical data

**Step 2: Data Kehamilan (Pregnancy Data)**
- HPHT (Last menstruation date) → calculates pregnancy weeks in real-time
- Displays trimester based on weeks
- Info box explaining how to determine HPHT

**Step 3: Data Kontak (Contact Info)**
- Nomor HP (WhatsApp Number)
- Summary display showing all entered data
- Age, weights, measurements, and pregnancy weeks recap

**Features:**
- Progress indicator showing current step
- Real-time age calculation from birth date
- Real-time pregnancy week calculation from HPHT
  - Formula: `Math.ceil(diffDays / 7)` where diffDays = days between HPHT and today
- Form validation with error display
- Loading state during submission
- Gradient backgrounds with glassmorphism design
- Responsive layout

### 4. Routing

**File:** `routes/web.php`

Routes configured:
```php
Route::get('/profile-completion', [ProfileCompletionController::class, 'show'])->name('profile.completion');
Route::post('/profile-completion', [ProfileCompletionController::class, 'store'])->name('profile.completion.store');
```

Routes protected with `ensure.profile.completed` middleware:
- `/dashboard`
- `/profile` (edit/update/delete)
- `/screening` (all screening routes)
- `/literacy` (all content routes)
- `/contacts` (all contact routes)

Routes NOT protected (allows access before profile completion):
- `/profile-completion` (show)
- `/profile-completion` (store)

### 5. Authentication Controller Update

**File:** `app/Http/Controllers/Auth/RegisteredUserController.php`

Changed:
- Removed `pregnancy_age_weeks` validation from registration
- Added `profile_completed: false` to new user creation
- Changed redirect after registration from `RouteServiceProvider::HOME` to `route('profile.completion')`

This ensures new users are immediately taken to complete their profile after registration.

## User Flow

### Registration Flow
1. User clicks "Daftar" on login page
2. Fills 3-step registration form:
   - Step 1: Name & Email
   - Step 2: Location & WhatsApp Number
   - Step 3: Password
3. Clicks "Selesaikan Pendaftaran"
4. Account created with `profile_completed = false`
5. User logged in and redirected to `/profile-completion`

### Profile Completion Flow
1. User completes 3-step wizard
2. Enters physical health data with age calculation
3. Enters HPHT with automatic pregnancy week calculation
4. Confirms phone number and reviews data summary
5. Clicks "Selesai & Lanjut ke Dashboard"
6. Data saved to database
7. `profile_completed` flag set to true
8. Pregnancy age in weeks calculated and saved
9. Redirected to `/dashboard`

### Returning User Flow
1. User logs in
2. If `profile_completed = true` → goes to dashboard
3. If `profile_completed = false` → redirected to profile completion

## Validation & Error Handling

All form fields validate with Indonesian error messages:
- Dates validated for realism
- Numeric values validated for reasonable health metrics
- HPHT must be within 1 year (indicates active pregnancy)
- Errors displayed inline under each field
- Submission disabled during processing

## Data Security

- Password hashing using Laravel's default hash algorithm
- All user data stored securely in database
- Profile completion form uses POST method with CSRF token
- Middleware ensures profile must be completed before accessing main features
- Phone numbers stored but not publicly exposed

## Testing the Implementation

1. **New User Registration:**
   ```bash
   # Go to /register
   # Fill form with sample data
   # Should redirect to profile completion after registration
   ```

2. **Profile Completion:**
   ```bash
   # Fill all 3 steps with valid data
   # Real-time calculations should work for age and pregnancy weeks
   # Click submit should save to database
   # Should redirect to dashboard
   ```

3. **Access Control:**
   ```bash
   # Try accessing /screening or /literacy without completing profile
   # Should redirect to /profile-completion
   ```

4. **Existing Data:**
   ```bash
   # Edit profile to update health metrics
   # Changes should be reflected in dashboard
   ```

## Files Modified/Created

### Created:
- `app/Http/Controllers/ProfileCompletionController.php`
- `app/Http/Middleware/EnsureProfileCompleted.php`
- `database/migrations/2025_11_28_000001_add_profile_fields_to_users_table.php`
- `resources/js/Pages/ProfileCompletion.jsx`

### Modified:
- `app/Models/User.php` - Added fillable fields
- `app/Http/Kernel.php` - Registered middleware
- `routes/web.php` - Added profile completion routes and middleware
- `app/Http/Controllers/Auth/RegisteredUserController.php` - Updated registration flow
- `resources/js/Pages/Auth/Register.jsx` - Removed pregnancy_age_weeks, added nomor_hp

## Database Schema

```sql
ALTER TABLE users ADD COLUMN tanggal_lahir DATE NULLABLE;
ALTER TABLE users ADD COLUMN berat_badan DECIMAL(5,2) NULLABLE;
ALTER TABLE users ADD COLUMN tinggi_badan DECIMAL(5,2) NULLABLE;
ALTER TABLE users ADD COLUMN lingkar_lengan DECIMAL(5,2) NULLABLE;
ALTER TABLE users ADD COLUMN hpht DATE NULLABLE;
ALTER TABLE users ADD COLUMN nomor_hp VARCHAR(255) NULLABLE;
ALTER TABLE users ADD COLUMN profile_completed BOOLEAN DEFAULT FALSE;
ALTER TABLE users DROP COLUMN pregnancy_age_weeks IF EXISTS;
ALTER TABLE users ADD COLUMN pregnancy_age_weeks INT NULLABLE AFTER profile_completed;
```

## Next Steps / Future Improvements

1. **Email Verification:** Consider making profile completion dependent on email verification
2. **Profile Editing:** Add page to edit profile after initial completion
3. **Data Validation:** Add more detailed validation for health metrics
4. **Export:** Allow users to export their health data
5. **Analytics:** Track completion rates and time-to-completion
6. **Mobile Optimization:** Further optimize for mobile devices
7. **Notifications:** Send WhatsApp notifications using the stored phone number
