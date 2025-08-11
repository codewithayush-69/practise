import { z, ZodError } from "zod";

const age = z.number().min(18).max(80).int();
let value = 17;

try {
  const userage = age.parse(value);
  console.log(userage);
} catch (error) {
    if (error instanceof ZodError) {
        console.log(error.issues[0].message);
        console.log(error.issues);
        
    }else {
        console.log("Unexpected error occured: ", error);
    };
};
