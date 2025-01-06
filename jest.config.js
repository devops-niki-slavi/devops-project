export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transformIgnorePatterns: [
        "node_modules/(?!(vite|react-router-dom)/)",
    ],
};
