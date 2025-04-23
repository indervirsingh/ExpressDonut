#!/bin/bash
# Cleanup Sakai template and setup Angular project structure
# Tested on Angular 15+ projects

# Remove unnecessary Sakai template files
echo "Cleaning up Sakai template files..."
rm -rf src/app/pages/login
rm -rf src/app/pages/crud

# Generate core modules and services
ng generate module core --module app.module.ts --project=sakai-ng
ng generate service core/services/auth --project=sakai-ng --module=core
ng generate service core/services/api --project=sakai-ng --module=core
ng generate interceptor core/interceptors/auth --project=sakai-ng

# Create shared modules
ng generate module shared --module app.module.ts --standalone --project=sakai-ng
ng generate component shared/components/toast --project=sakai-ng --export --module=shared

# Generate feature modules with proper lazy loading
ng generate module features/dashboard --routing --module app.module.ts --project=sakai-ng
ng generate component features/dashboard/ui/dashboard-page --project=sakai-ng --export
ng generate module features/profile --routing --module app.module.ts --project=sakai-ng
ng generate component features/profile/ui/profile-page --project=sakai-ng --export

# Generate routing files
ng generate module app --routing --flat --project=sakai-ng

echo "Cleanup complete. Project structure:"
tree -d src/app -L 3 