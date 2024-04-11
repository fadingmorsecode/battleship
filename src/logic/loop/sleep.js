function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default async function waitOneSecond() {
  await sleep(400);
}
