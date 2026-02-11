export const getWeatherIcon = (code: number): string => {
  switch (code) {
    case 0:
      return "icon-sunny.webp";
      break;

    case 1:
    case 2:
    case 3:
      return "icon-partly-cloudy.webp";
      break;

    case 45:
    case 48:
      return "icon-fog.webp";
      break;

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return "icon-drizzle.webp";
      break;

    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return "icon-rain.webp";
      break;

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "icon-snow.webp";
      break;

    case 95:
    case 96:
    case 99:
      return "icon-storm.webp";
      break;

    default:
      return "icon-sunny.webp";
      break;
  }
};
