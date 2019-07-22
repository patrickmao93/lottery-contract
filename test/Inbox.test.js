const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

const options = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};

const web3 = new Web3(ganache.provider(), null, options);

let accounts;
let lottery;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // use one of those accounts to deploy the contract
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery", () => {
  it("deploys a contract", () => {
    assert.ok(lottery.options.address);
  });

  // it("has a default message", async () => {
  //   const message = await lottery.methods.message().call();
  //   assert.equal(message, "Hi there!");
  // });

  // it("can change the message", async () => {
  //   await lottery.methods.setMessage("Bye there!").send({ from: accounts[0] });
  //   const message = await lottery.methods.message().call();
  //   assert.equal(message, "Bye there!");
  // });
});
