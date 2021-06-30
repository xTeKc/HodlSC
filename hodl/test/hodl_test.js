const HodlTest = artifacts.require("HodlTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HodlTest", function (/* accounts */) {
  it("should assert true", async function () {
    await HodlTest.deployed();
    return assert.isTrue(true);
  });
});
