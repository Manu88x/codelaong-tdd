// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();  // Get the current year dynamically
    const birthYear = 1984;  // The test person's birth year
    const expectedAge = currentYear - birthYear;  // Calculate the expected age

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);  // Call the function to get the age

    // Assert
    expect(ageOfPerson).toEqual(expectedAge);  // Check if the returned age matches the expected age
  });
});

