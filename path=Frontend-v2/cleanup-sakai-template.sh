# This script performs a multi-layered cleanup of the Sakai-NG template:
# 1. Removal of non-essential components:
#    - Demo modules/pages (potential attack surface reduction)
#    - Template-specific services (security through minimal dependencies)
#    - Unused assets (attack surface and package size reduction)

# 2. Security-focused asset cleanup:
#    - Removes theme/layout CSS files (potential CSS injection vectors)
#    - Deletes demo images/license files (information disclosure prevention)

# 3. Configuration hardening:
#    - Requires manual Angular config updates (ensures conscious removal)
#    - Suggests dependency audits (supply chain security)

# Critical security notes:
# - Maintains core LICENSE file for compliance
# - Preserves fundamental Angular structure
# - Requires manual verification of build configurations 