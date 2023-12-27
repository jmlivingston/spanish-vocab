const IS_MOCKED = process.env.IS_MOCKED === "true";

const STORAGE_ROOT_KEY = "spanish-vocab";

const STORAGE_KEYS = Object.freeze({
  TEST: `${STORAGE_ROOT_KEY}_test`,
  USER: `${STORAGE_ROOT_KEY}_user`,
});

export { IS_MOCKED, STORAGE_KEYS, STORAGE_ROOT_KEY };
