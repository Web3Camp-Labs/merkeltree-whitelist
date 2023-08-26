import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

function generateMerkleTree(
  whitelist: string[][]
): StandardMerkleTree<string[]> {
  return StandardMerkleTree.of(whitelist, ["address"]);
}

function generateProof(
  tree: StandardMerkleTree<string[]>,
  address: string
): string[] {
  return tree.getProof([address]);
}

export default function goMerklizedSetup(whitelist: string[][]) {
  const tree = generateMerkleTree(whitelist);

  const proofs = whitelist.map((item) => {
    const proof = generateProof(tree, item[0]);
    return { address: item[0], proof: proof };
  });
  return {
    rootHash: tree.root,
    proofs,
  };
}
