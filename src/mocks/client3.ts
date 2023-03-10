import { ComponentTypes } from '../types/core';
import CarLogo from '../assets/car.svg';
import StatsLogo from '../assets/stats.svg';
import OrgLogo from '../assets/org.svg';

export const client3 = {
  headerConfig: {
    primaryColor: '#ffffff',
    secondaryColor: '#b9bcc0',
    stepLineColor: '#595959',
    completedStepLineColor: '#0072CE',
  },
  steps: [
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Going electric starts with understanding your needs',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.INFO,
        data: {
          images: [
            {
              src: OrgLogo,
              description: 'Tell us about your organization',
              styles: {
                color: '#333333',
                fontFamily: 'Roboto, sans-serif',
              },
            },
            {
              src: CarLogo,
              description: 'Tell us about your vehicles',
              styles: {
                color: '#333333',
                fontFamily: 'Roboto, sans-serif',
              },
            },
            {
              src: StatsLogo,
              description: 'See how much you can save',
              styles: {
                color: '#333333',
                fontFamily: 'Roboto, sans-serif',
              },
            },
          ],
        },
      },
      {
        type: ComponentTypes.NEXT_BUTTON,
        data: {
          text: 'Create Your First Vehicle Set',
          styles: {
            color: '#ffffff',
            backgroundColor: '#0072CE',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
    ],
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'General Information',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We use this information to calculate fuel costs and applicable incentives',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.TEXT_FIELD,
        data: {
          name: 'zipCode',
          label: 'Zip Code',
          hint: 'Used to check incentive applicability and fuel prices',
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
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: '#FFFFFF',
                border: '1px solid #0072CE',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#0072CE',
                fontFamily: 'Roboto, sans-serif',
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
          text: 'General Information',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We use this information to calculate fuel costs and applicable incentives',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.DROPDOWN,
        data: {
          name: 'buildingType',
          label: 'Building Type',
          options: [
            {
              label: 'Home (garage)',
              value: 'HOME',
            },
            {
              label: 'Small office',
              value: 'SMALL_OFFICE',
            },
            {
              label: 'Large office',
              value: 'LARGE_OFFICE',
            },
            {
              label: 'Depot',
              value: 'DEPOT',
            },
            {
              label: 'School',
              value: 'SCHOOL',
            },
            {
              label: 'Apartment Building',
              value: 'APARTMENT',
            },
          ],
          styles: {
            fontFamily: 'Roboto, sans-serif',
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
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: '#FFFFFF',
                border: '1px solid #0072CE',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#0072CE',
                fontFamily: 'Roboto, sans-serif',
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
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'You will be informed soon about the process',
          styles: {
            color: '#404040',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      {
        type: ComponentTypes.NEXT_BUTTON,
        data: {
          text: 'Back to Home',
          styles: {
            color: '#ffffff',
            backgroundColor: '#79b31d',
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
    ]
  ],
};