import { z } from "zod";
import { LoginRequestSchema } from "./schemas";

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
