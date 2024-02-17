const primarch1 = {
    name: "Rogal",
    lastname: "Dorn",
    age: 300,
};
primarch1

const primarch2 = {
    ...primarch1,
    legion: "Imperial Fists",
};
primarch2

const primarch3 = {
    ...primarch2,
    age: primarch2.age + 50
};
primarch3

const { legion, ...newPrimarch} = primarch3;
newPrimarch