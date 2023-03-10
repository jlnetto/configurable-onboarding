import { ComponentTypes } from '../types/core';
import CarLogo from '../assets/car.svg';
import StatsLogo from '../assets/stats.svg';
import OrgLogo from '../assets/org.svg';

export const client = {
  headerConfig: {
    primaryColor: '#a52a2a',
    secondaryColor: '#b9bcc0',
    stepLineColor: '#595959',
    completedStepLineColor: '#a52a2a',
  },
  steps: [
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Welcome to onboarding',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'Please, fill the steps with your personal information',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.INFO,
        data: {
          images: [
            {
              src: OrgLogo,
              description: 'Tell us about you',
              styles: {
                color: '#333333',
                fontFamily: 'monospace',
              },
            },
          ],
        },
      },
      {
        type: ComponentTypes.NEXT_BUTTON,
        data: {
          text: 'Start',
          styles: {
            color: '#ffffff',
            backgroundColor: '#a52a2a',
            fontFamily: 'monospace',
          },
        },
      },
    ],
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Personal information',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We use this information to configure the system',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.TEXT_FIELD,
        data: {
          name: 'firstName',
          label: 'First Name',
        },
      },
      {
        type: ComponentTypes.TEXT_FIELD,
        data: {
          name: 'lastName',
          label: 'Last Name'        
        },
      },
      {
        type: ComponentTypes.BUTTON_GROUP,
        data: {
          buttonGroup: [
            {
              text: 'Back',
              styles: {
                color: '#172536',
                fontFamily: 'monospace',
                backgroundColor: '#FFFFFF',
                border: '1px solid #a52a2a',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#a52a2a',
                fontFamily: 'monospace',
              },
            },
          ],
        },
      },
    ],
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Address information',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.TEXT_FIELD,
        data: {
          name: 'zipCode',
          label: 'Zip Code',
        },
      },
      {
        type: ComponentTypes.BUTTON_GROUP,
        data: {
          buttonGroup: [
            {
              text: 'Back',
              styles: {
                color: '#172536',
                fontFamily: 'monospace',
                backgroundColor: '#FFFFFF',
                border: '1px solid #a52a2a',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#a52a2a',
                fontFamily: 'monospace',
              },
            },
          ],
        },
      },
    ],
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Address information',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.DROPDOWN,
        data: {
          name: 'country',
          label: 'Country',
          options: [
            {
              label: 'Brazil',
              value: 'BR',
            },
            {
              label: 'Canada',
              value: 'CA',
            },
            {
              label: 'México',
              value: 'mx',
            },
            {
              label: 'United States',
              value: 'US',
            },
          ],
          styles: {
            fontFamily: 'monospace',
            backgroundColor: '#a52a2a'
          },
        },
      },
      {
        type: ComponentTypes.BUTTON_GROUP,
        data: {
          buttonGroup: [
            {
              text: 'Back',
              styles: {
                color: '#172536',
                fontFamily: 'monospace',
                backgroundColor: '#FFFFFF',
                border: '1px solid #a52a2a',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#a52a2a',
                fontFamily: 'monospace',
              },
            },
          ],
        },
      },
    ],
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Address information',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.TEXT_FIELD,
        data: {
          name: 'city',
          label: 'City',
        },
      },
      {
        type: ComponentTypes.BUTTON_GROUP,
        data: {
          buttonGroup: [
            {
              text: 'Back',
              styles: {
                color: '#172536',
                fontFamily: 'monospace',
                backgroundColor: '#FFFFFF',
                border: '1px solid #a52a2a',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#a52a2a',
                fontFamily: 'monospace',
              },
            },
          ],
        },
      },
    ],
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Thank you for all information',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'You will contact you soon',
          styles: {
            color: '#404040',
            fontFamily: 'monospace',
          },
        },
      },
      {
        type: ComponentTypes.NEXT_BUTTON,
        data: {
          text: 'Done',
          styles: {
            color: '#ffffff',
            backgroundColor: '#79b31d',
            fontFamily: 'monospace',
          },
        },
      },
    ]
  ],
};