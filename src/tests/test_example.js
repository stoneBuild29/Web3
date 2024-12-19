const { expect  } = require("chai");

describe("Example Contract", function () {
    it("Should set and retrieve data correctly", async function () {
        const Example = await ethers.getContractFactory("Example");
        const example = await Example.deploy();
        await example.deployed();

        await example.setData(42);
        expect(await example.data()).to.equal(42);
    });
});