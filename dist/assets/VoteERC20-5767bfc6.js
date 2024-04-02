const e=[{type:"constructor",inputs:[],stateMutability:"nonpayable"},{type:"receive",stateMutability:"payable"},{type:"function",name:"BALLOT_TYPEHASH",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"CLOCK_MODE",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"COUNTING_MODE",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"pure"},{type:"function",name:"EXTENDED_BALLOT_TYPEHASH",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"view"},{type:"function",name:"cancel",inputs:[{name:"targets",type:"address[]",internalType:"address[]"},{name:"values",type:"uint256[]",internalType:"uint256[]"},{name:"calldatas",type:"bytes[]",internalType:"bytes[]"},{name:"descriptionHash",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"castVote",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"support",type:"uint8",internalType:"uint8"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"castVoteBySig",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"support",type:"uint8",internalType:"uint8"},{name:"v",type:"uint8",internalType:"uint8"},{name:"r",type:"bytes32",internalType:"bytes32"},{name:"s",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"castVoteWithReason",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"support",type:"uint8",internalType:"uint8"},{name:"reason",type:"string",internalType:"string"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"castVoteWithReasonAndParams",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"support",type:"uint8",internalType:"uint8"},{name:"reason",type:"string",internalType:"string"},{name:"params",type:"bytes",internalType:"bytes"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"castVoteWithReasonAndParamsBySig",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"support",type:"uint8",internalType:"uint8"},{name:"reason",type:"string",internalType:"string"},{name:"params",type:"bytes",internalType:"bytes"},{name:"v",type:"uint8",internalType:"uint8"},{name:"r",type:"bytes32",internalType:"bytes32"},{name:"s",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"clock",inputs:[],outputs:[{name:"",type:"uint48",internalType:"uint48"}],stateMutability:"view"},{type:"function",name:"contractType",inputs:[],outputs:[{name:"",type:"bytes32",internalType:"bytes32"}],stateMutability:"pure"},{type:"function",name:"contractURI",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"contractVersion",inputs:[],outputs:[{name:"",type:"uint8",internalType:"uint8"}],stateMutability:"pure"},{type:"function",name:"eip712Domain",inputs:[],outputs:[{name:"fields",type:"bytes1",internalType:"bytes1"},{name:"name",type:"string",internalType:"string"},{name:"version",type:"string",internalType:"string"},{name:"chainId",type:"uint256",internalType:"uint256"},{name:"verifyingContract",type:"address",internalType:"address"},{name:"salt",type:"bytes32",internalType:"bytes32"},{name:"extensions",type:"uint256[]",internalType:"uint256[]"}],stateMutability:"view"},{type:"function",name:"execute",inputs:[{name:"targets",type:"address[]",internalType:"address[]"},{name:"values",type:"uint256[]",internalType:"uint256[]"},{name:"calldatas",type:"bytes[]",internalType:"bytes[]"},{name:"descriptionHash",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"payable"},{type:"function",name:"getAllProposals",inputs:[],outputs:[{name:"allProposals",type:"tuple[]",internalType:"struct VoteERC20.Proposal[]",components:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"proposer",type:"address",internalType:"address"},{name:"targets",type:"address[]",internalType:"address[]"},{name:"values",type:"uint256[]",internalType:"uint256[]"},{name:"signatures",type:"string[]",internalType:"string[]"},{name:"calldatas",type:"bytes[]",internalType:"bytes[]"},{name:"startBlock",type:"uint256",internalType:"uint256"},{name:"endBlock",type:"uint256",internalType:"uint256"},{name:"description",type:"string",internalType:"string"}]}],stateMutability:"view"},{type:"function",name:"getVotes",inputs:[{name:"account",type:"address",internalType:"address"},{name:"timepoint",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getVotesWithParams",inputs:[{name:"account",type:"address",internalType:"address"},{name:"timepoint",type:"uint256",internalType:"uint256"},{name:"params",type:"bytes",internalType:"bytes"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"hasVoted",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"account",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"hashProposal",inputs:[{name:"targets",type:"address[]",internalType:"address[]"},{name:"values",type:"uint256[]",internalType:"uint256[]"},{name:"calldatas",type:"bytes[]",internalType:"bytes[]"},{name:"descriptionHash",type:"bytes32",internalType:"bytes32"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"pure"},{type:"function",name:"initialize",inputs:[{name:"_name",type:"string",internalType:"string"},{name:"_contractURI",type:"string",internalType:"string"},{name:"_trustedForwarders",type:"address[]",internalType:"address[]"},{name:"_token",type:"address",internalType:"address"},{name:"_initialVotingDelay",type:"uint256",internalType:"uint256"},{name:"_initialVotingPeriod",type:"uint256",internalType:"uint256"},{name:"_initialProposalThreshold",type:"uint256",internalType:"uint256"},{name:"_initialVoteQuorumFraction",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"isTrustedForwarder",inputs:[{name:"forwarder",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"name",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"onERC1155BatchReceived",inputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"address",internalType:"address"},{name:"",type:"uint256[]",internalType:"uint256[]"},{name:"",type:"uint256[]",internalType:"uint256[]"},{name:"",type:"bytes",internalType:"bytes"}],outputs:[{name:"",type:"bytes4",internalType:"bytes4"}],stateMutability:"nonpayable"},{type:"function",name:"onERC1155Received",inputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"address",internalType:"address"},{name:"",type:"uint256",internalType:"uint256"},{name:"",type:"uint256",internalType:"uint256"},{name:"",type:"bytes",internalType:"bytes"}],outputs:[{name:"",type:"bytes4",internalType:"bytes4"}],stateMutability:"nonpayable"},{type:"function",name:"onERC721Received",inputs:[{name:"",type:"address",internalType:"address"},{name:"",type:"address",internalType:"address"},{name:"",type:"uint256",internalType:"uint256"},{name:"",type:"bytes",internalType:"bytes"}],outputs:[{name:"",type:"bytes4",internalType:"bytes4"}],stateMutability:"nonpayable"},{type:"function",name:"proposalDeadline",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"proposalIndex",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"proposalProposer",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"proposalSnapshot",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"proposalThreshold",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"proposalVotes",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"}],outputs:[{name:"againstVotes",type:"uint256",internalType:"uint256"},{name:"forVotes",type:"uint256",internalType:"uint256"},{name:"abstainVotes",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"proposals",inputs:[{name:"",type:"uint256",internalType:"uint256"}],outputs:[{name:"proposalId",type:"uint256",internalType:"uint256"},{name:"proposer",type:"address",internalType:"address"},{name:"startBlock",type:"uint256",internalType:"uint256"},{name:"endBlock",type:"uint256",internalType:"uint256"},{name:"description",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"propose",inputs:[{name:"targets",type:"address[]",internalType:"address[]"},{name:"values",type:"uint256[]",internalType:"uint256[]"},{name:"calldatas",type:"bytes[]",internalType:"bytes[]"},{name:"description",type:"string",internalType:"string"}],outputs:[{name:"proposalId",type:"uint256",internalType:"uint256"}],stateMutability:"nonpayable"},{type:"function",name:"quorum",inputs:[{name:"timepoint",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"quorumDenominator",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"quorumNumerator",inputs:[{name:"timepoint",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"quorumNumerator",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"relay",inputs:[{name:"target",type:"address",internalType:"address"},{name:"value",type:"uint256",internalType:"uint256"},{name:"data",type:"bytes",internalType:"bytes"}],outputs:[],stateMutability:"payable"},{type:"function",name:"setContractURI",inputs:[{name:"uri",type:"string",internalType:"string"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setProposalThreshold",inputs:[{name:"newProposalThreshold",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setVotingDelay",inputs:[{name:"newVotingDelay",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setVotingPeriod",inputs:[{name:"newVotingPeriod",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"state",inputs:[{name:"proposalId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"uint8",internalType:"enum IGovernorUpgradeable.ProposalState"}],stateMutability:"view"},{type:"function",name:"supportsInterface",inputs:[{name:"interfaceId",type:"bytes4",internalType:"bytes4"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"token",inputs:[],outputs:[{name:"",type:"address",internalType:"contract IERC5805Upgradeable"}],stateMutability:"view"},{type:"function",name:"updateQuorumNumerator",inputs:[{name:"newQuorumNumerator",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"version",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"votingDelay",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"votingPeriod",inputs:[],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"event",name:"EIP712DomainChanged",inputs:[],anonymous:!1},{type:"event",name:"Initialized",inputs:[{name:"version",type:"uint8",indexed:!1,internalType:"uint8"}],anonymous:!1},{type:"event",name:"ProposalCanceled",inputs:[{name:"proposalId",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"ProposalCreated",inputs:[{name:"proposalId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"proposer",type:"address",indexed:!1,internalType:"address"},{name:"targets",type:"address[]",indexed:!1,internalType:"address[]"},{name:"values",type:"uint256[]",indexed:!1,internalType:"uint256[]"},{name:"signatures",type:"string[]",indexed:!1,internalType:"string[]"},{name:"calldatas",type:"bytes[]",indexed:!1,internalType:"bytes[]"},{name:"voteStart",type:"uint256",indexed:!1,internalType:"uint256"},{name:"voteEnd",type:"uint256",indexed:!1,internalType:"uint256"},{name:"description",type:"string",indexed:!1,internalType:"string"}],anonymous:!1},{type:"event",name:"ProposalExecuted",inputs:[{name:"proposalId",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"ProposalThresholdSet",inputs:[{name:"oldProposalThreshold",type:"uint256",indexed:!1,internalType:"uint256"},{name:"newProposalThreshold",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"QuorumNumeratorUpdated",inputs:[{name:"oldQuorumNumerator",type:"uint256",indexed:!1,internalType:"uint256"},{name:"newQuorumNumerator",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"VoteCast",inputs:[{name:"voter",type:"address",indexed:!0,internalType:"address"},{name:"proposalId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"support",type:"uint8",indexed:!1,internalType:"uint8"},{name:"weight",type:"uint256",indexed:!1,internalType:"uint256"},{name:"reason",type:"string",indexed:!1,internalType:"string"}],anonymous:!1},{type:"event",name:"VoteCastWithParams",inputs:[{name:"voter",type:"address",indexed:!0,internalType:"address"},{name:"proposalId",type:"uint256",indexed:!1,internalType:"uint256"},{name:"support",type:"uint8",indexed:!1,internalType:"uint8"},{name:"weight",type:"uint256",indexed:!1,internalType:"uint256"},{name:"reason",type:"string",indexed:!1,internalType:"string"},{name:"params",type:"bytes",indexed:!1,internalType:"bytes"}],anonymous:!1},{type:"event",name:"VotingDelaySet",inputs:[{name:"oldVotingDelay",type:"uint256",indexed:!1,internalType:"uint256"},{name:"newVotingDelay",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"event",name:"VotingPeriodSet",inputs:[{name:"oldVotingPeriod",type:"uint256",indexed:!1,internalType:"uint256"},{name:"newVotingPeriod",type:"uint256",indexed:!1,internalType:"uint256"}],anonymous:!1},{type:"error",name:"Empty",inputs:[]}];export{e as default};
