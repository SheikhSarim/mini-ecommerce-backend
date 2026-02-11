import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthChecker(): { status: string } {
    return { status: 'Ok' };
  }

  getTermsOfService(): string {
    return `
Mini eCommerce Backend - Terms of Service
Effective Date: 2026

1. Acceptance of Terms
By accessing or using this API, you agree to comply with and be bound by these Terms of Service.

2. Use of Service
This API is provided for educational and demonstration purposes only.
You agree not to misuse, overload, or attempt to exploit the system.

3. User Responsibilities
You are responsible for maintaining the confidentiality of any authentication credentials.
Unauthorized use of the API is strictly prohibited.

4. Limitation of Liability
This project is provided "as is" without warranty of any kind.
The authors are not responsible for any damages resulting from its use.

5. Modifications
We reserve the right to modify these terms at any time without prior notice.

6. Termination
Access may be revoked at any time for violations of these terms.

For questions, contact the project maintainer.
`;
  }
}
