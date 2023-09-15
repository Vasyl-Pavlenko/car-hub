# Car Rental App

[Live Demo](https://car-hub-rouge.vercel.app/) | [GitHub Repository](https://github.com/Vasyl-Pavlenko/car-hub)

## Table of Contents
- Overview
- Technologies Used
- Features
- Getting Started
- Usage
- Contributing
- License

## Overview
The Car Rental App is a web application that allows users to rent cars, search for available vehicles based on make, model, year, and fuel type, and navigate through paginated results. It utilizes Next.js for server-side rendering (SSR), React for the front-end, Tailwind CSS for styling, and the IMAGIN.studio API for car data.

## Technologies Used
- Next.js
- React
- Tailwind CSS
- IMAGIN.studio API
- RapidAPI

## Features
- **Car Search**: Users can search for available cars based on make, model, year, and fuel type.
- **Pagination**: The application supports paginated results for easy navigation.
- **SSR**: Utilizes server-side rendering for improved performance and SEO.
- **Other Features**: You can create new branch and add any additional features specific to your requirements

## Getting Started
To run the Car Rental App locally on your machine, follow these steps:

1. Clone the GitHub repository:

```sh
git clone https://github.com/your-github-repo-link.git
cd car-rental-app
```

2. Install dependencies:
```sh
npm install
# or
yarn install
```

3. Configure environment variables:

Create a .env.local file in the project root and add the following:
```sh
.env
IMAGIN_API_KEY=your-imagin-studio-api-key
OTHER_ENV_VARIABLES=your-other-variables
```

Replace your-imagin-studio-api-key with your actual IMAGIN.studio API key and configure any other environment variables needed.

4. Run the application:
```sh
npm run dev
# or
yarn dev
```
The application should now be running locally at http://localhost:3000.

## Usage
- Use the search functionality to find cars based on make, model, year, and fuel type.
- Navigate through the paginated results to view more cars.
- Additional usage instructions, if applicable.

## Contributing
We welcome contributions to the Car Rental App. If you'd like to contribute, please follow these steps:

- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and ensure the code adheres to coding standards.
- Submit a pull request with a clear description of your changes.
