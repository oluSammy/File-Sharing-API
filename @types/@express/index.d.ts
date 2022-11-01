import { IAuthResponse } from "../../src/types/types";

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}
