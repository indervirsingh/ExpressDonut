# Run after successful cleanup:
git add -A
git commit -m "security: implement comprehensive template cleanup (CVE-2023-XXXX)"
npm ci --omit=dev
npx @angular/cli audit 