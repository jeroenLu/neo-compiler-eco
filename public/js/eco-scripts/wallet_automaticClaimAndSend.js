function fillSpanTextOrInputBox(boxToFill, contentToFill)
{
	if (boxToFill != "")
	{
		if(boxToFill != "#createtx_NEO" && boxToFill != "#createtx_GAS")
			$(boxToFill)[0].innerHTML = contentToFill;
		else
			$(boxToFill).val(contentToFill);
	}
}

function automaticClaim(amountClaimable, idToAutomaticClaim) {
    //console.log("amountClaimable is " +  amountClaimable + " of index "+ idToAutomaticClaim);

    if (idToAutomaticClaim != -1) {
        if (ECO_WALLET[idToAutomaticClaim].account.isMultiSig) {
            jsonArrayWithPrivKeys = getMultiSigPrivateKeys(idToAutomaticClaim);
            //Multi-sig address
            createClaimMSGasTX(idToAutomaticClaim, jsonArrayWithPrivKeys, getCurrentNetworkNickname());
        } else //not multisig- normal address
        {
            createClaimGasTX(idToAutomaticClaim, BASE_PATH_CLI, getCurrentNetworkNickname());
        }
    }
}

function fillAllNeo() {
    var addrFromIndex = $("#createtx_from")[0].selectedOptions[0].index;
    getAllNeoOrGasFromNeoCli(ECO_WALLET[addrFromIndex].account.address, "NEO", "#createtx_NEO");
}

function fillAllGas() {
    var addrFromIndex = $("#createtx_from")[0].selectedOptions[0].index;
    getAllNeoOrGasFromNeoCli(ECO_WALLET[addrFromIndex].account.address, "GAS", "#createtx_GAS");
}

function selfTransfer(idToTransfer) {
    if (idToTransfer < ECO_WALLET.length && idToTransfer > -1) {
        getAllNeoOrGasFromNeoCli(ECO_WALLET[idToTransfer].account.address, "NEO", "", true);
    } else {
        alert("Cannot transfer anything from " + idToTransfer + " from set of known addresses with size " + ECO_WALLET.length)
    }
}
