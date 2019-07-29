// @tsdoc
import { createLog } from "./createLog"
test('createLog', () => {
  // @tsdoc <
  expect(
    createLog("nimo")
  ).toEqual(
    "Message: nimo"
  )
  // @tsdoc >
});
