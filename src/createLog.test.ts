// @tsdoc <
import { createLog } from "./createLog"
// @tsdoc >
test('createLog', () => {
  // @tsdoc <
  expect(
    createLog("nimo")
  ).toEqual(
    "Message: nimo"
  )
  // @tsdoc >
});
