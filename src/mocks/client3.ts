import { ComponentTypes } from '../types/core';
import CarLogo from '../assets/car.svg';
import StatsLogo from '../assets/stats.svg';
import OrgLogo from '../assets/org.svg';

export const client = {
  headerConfig: {
    primaryColor: '#87953d',
    secondaryColor: '#007ab5',
    stepLineColor: '#ffffff',
    completedStepLineColor: '#87953d',
  },
  steps: [
    [
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'Going electric starts with understanding your needs',
          styles: {
            color: '#87953d',
            fontFamily: 'system-ui',
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
                color: '#87953d',
                fontFamily: 'system-ui',
              },
            },
            {
              src: CarLogo,
              description: 'Tell us about your vehicles',
              styles: {
                color: '#87953d',
                fontFamily: 'system-ui',
              },
            },
            {
              src: StatsLogo,
              description: 'See how much you can save',
              styles: {
                color: '#87953d',
                fontFamily: 'system-ui',
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
            backgroundColor: '#87953d',
            fontFamily: 'system-ui',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.',
          styles: {
            color: '#404040',
            fontFamily: 'system-ui',
          },
        },
      },
    ],
    [
      {
        type: ComponentTypes.BUTTON_GROUP,
        data: {
          buttonGroup: [
            {
              text: 'Back',
              styles: {
                color: '#FFFFFF',
                fontFamily: 'system-ui',
                backgroundColor: '#87953d',
                border: '1px solid #87953d',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#007ab5',
                fontFamily: 'system-ui',
              },
            },
          ],
        },
      },
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'General Information',
          styles: {
            color: '#87953d',
            fontFamily: 'system-ui',
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
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We use this information to calculate fuel costs and applicable incentives',
          styles: {
            color: '#404040',
            fontFamily: 'system-ui',
          },
        },
      },
    ],
    [
      {
        type: ComponentTypes.BUTTON_GROUP,
        data: {
          buttonGroup: [
            {
              text: 'Back',
              styles: {
                color: '#ffffff',
                fontFamily: 'system-ui',
                backgroundColor: '#87953d',
                border: '1px solid #87953d',
              },
            },
            {
              text: 'Next',
              styles: {
                color: '#ffffff',
                backgroundColor: '#0072CE',
                fontFamily: 'system-ui',
              },
            },
          ],
        },
      },
      {
        type: ComponentTypes.TITLE,
        data: {
          text: 'General Information',
          styles: {
            color: '#87953d',
            fontFamily: 'system-ui',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'We use this information to calculate fuel costs and applicable incentives',
          styles: {
            color: '#404040',
            fontFamily: 'system-ui',
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
            fontFamily: 'system-ui',
          },
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
            fontFamily: 'system-ui',
          },
        },
      },
      {
        type: ComponentTypes.DESCRIPTION,
        data: {
          text: 'You will be informed soon about the process',
          styles: {
            color: '#404040',
            fontFamily: 'system-ui',
          },
        },
      },
      {
        type: ComponentTypes.INFO,
        data: {
          images: [
            {
              src: CarLogo,
            },
          ],
        },
      },
      {
        type: ComponentTypes.NEXT_BUTTON,
        data: {
          text: 'Back to Home',
          styles: {
            color: '#ffffff',
            backgroundColor: '#87953d',
            fontFamily: 'system-ui',
          },
        },
      },
    ],
  ],
};
