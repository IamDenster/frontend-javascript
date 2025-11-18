// Create the Teacher interface
interface Teacher {
  readonly firstName: string;        // only modifiable on initialization
  readonly lastName: string;         // only modifiable on initialization
  fullTimeEmployee: boolean;         // always defined
  yearsOfExperience?: number;        // optional
  location: string;                  // always defined

  // allow additional unspecified attributes
  [key: string]: any;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
