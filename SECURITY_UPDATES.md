# Security Updates

This document outlines the security updates made to address vulnerabilities in the project dependencies.

## Updated Dependencies

The following dependencies have been updated to address security vulnerabilities:

1. **word-wrap**: Updated from 1.2.3 to 1.2.4
   - Addresses CVE-2023-26115: A vulnerability that could allow attackers to execute arbitrary code via crafted input.

2. **semver**: Updated from 6.3.0 to 6.3.1
   - Addresses CVE-2022-25883: A vulnerability that could allow for malicious code execution through crafted version strings.

3. **tough-cookie**: Updated from 4.1.2 to 4.1.3
   - Addresses a prototype pollution vulnerability that could lead to denial of service or code execution.

4. **webpack**: Updated from 5.74.0 to 5.99.8
   - Addresses GHSA-4vvj-4cpr-p986: A DOM Clobbering Gadget in AutoPublicPathRuntimeModule that could lead to XSS.

5. **json5**: Updated from 1.0.1 to 1.0.2
   - Addresses CVE-2022-46175: A prototype pollution vulnerability that could lead to denial of service or code execution.

6. **decode-uri-component**: Updated from 0.2.0 to 0.2.2
   - Addresses CVE-2022-38900: A vulnerability that could allow attackers to cause a denial of service via crafted URIs.

7. **loader-utils**: Updated from 2.0.3 to 2.0.4
   - Addresses CVE-2022-37601: A vulnerability that could allow attackers to execute arbitrary code via crafted input.

## Remaining Vulnerabilities

There are still some vulnerabilities in the project dependencies that cannot be fixed without breaking changes to react-scripts:

1. **nth-check < 2.0.1**: High severity vulnerability (GHSA-rp65-9cf3-cjxr)
   - Inefficient Regular Expression Complexity in nth-check
   - Used by svgo -> css-select -> @svgr/plugin-svgo -> @svgr/webpack -> react-scripts

2. **postcss < 8.4.31**: Moderate severity vulnerability (GHSA-7fh5-64p2-3v2j)
   - PostCSS line return parsing error
   - Used by resolve-url-loader in react-scripts

These vulnerabilities are common in many React projects and typically don't pose a significant risk for most applications, especially in development environments.

## Recommendations

For a complete security update, consider:
- Running `npm audit fix` (without --force) periodically to fix non-breaking vulnerabilities
- Exploring alternatives to the vulnerable dependencies
- Accepting the risk for development environments if the vulnerabilities don't affect your production build
- Upgrading to newer versions of react-scripts when available
