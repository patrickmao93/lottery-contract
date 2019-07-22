pragma solidity ^0.4.17;

contract WhoIsYourDaddy {
    string public whoIsYourDaddy;
    function WhoIsYourDaddy(string init) public {
        whoIsYourDaddy = init;
    }
    function setWhoIsYourDaddy(string newDaddy) public {
        whoIsYourDaddy = newDaddy;
    }
}