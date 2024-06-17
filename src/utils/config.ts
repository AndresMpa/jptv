import { EnvType, load } from "ts-dotenv";
import { resolve } from "path";

const schema = {
  NODE_ENV: {
    type: String,
    default: "development",
  },
  VERBOSE: {
    type: Boolean,
    default: false,
  },
} as const;

const config = load(schema);

export { config, schema };
