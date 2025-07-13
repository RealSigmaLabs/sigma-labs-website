'use client'

export function CodeBackground() {
  const codeLines = [
    "use solana_program::{account_info::AccountInfo, entrypoint::ProgramResult, pubkey::Pubkey};",
    "pub fn process_instruction(program_id: &Pubkey, accounts: &[AccountInfo], instruction_data: &[u8]) -> ProgramResult {",
    "    let mut lamports = accounts[0].lamports();",
    "    let mut data = accounts[0].data.borrow_mut();",
    "    data[0] = instruction_data[0];",
    "    accounts[0].lamports.set(lamports);",
    "    Ok(())",
    "}",
    "struct SigmaToken {",
    "    pub mint: Pubkey,",
    "    pub authority: Pubkey,",
    "    pub supply: u64,",
    "}",
    "impl SigmaToken {",
    "    pub fn new(mint: Pubkey, authority: Pubkey) -> Self {",
    "        Self { mint, authority, supply: 0 }",
    "    }",
    "    pub fn mint(&mut self, amount: u64) -> Result<(), ProgramError> {",
    "        self.supply = self.supply.checked_add(amount).ok_or(ProgramError::ArithmeticOverflow)?;",
    "        Ok(())",
    "    }",
    "}",
    "let mut sigma_labs = SigmaLabs::new();",
    "sigma_labs.add_project(Project::new(\"DeFi Protocol\", \"Revolutionary lending platform\"));",
    "sigma_labs.add_project(Project::new(\"NFT Marketplace\", \"Next-gen digital art trading\"));",
    "sigma_labs.add_project(Project::new(\"DAO Governance\", \"Community-driven decision making\"));",
    "for project in sigma_labs.projects.iter() {",
    "    println!(\"Project: {}\", project.name);",
    "    println!(\"Description: {}\", project.description);",
    "}",
    "async fn deploy_to_solana(program: &Program) -> Result<Signature, Box<dyn std::error::Error>> {",
    "    let client = RpcClient::new(\"https://api.mainnet-beta.solana.com\".to_string());",
    "    let signature = client.send_and_confirm_transaction(&transaction)?;",
    "    Ok(signature)",
    "}",
    "let mut blockchain = Blockchain::new();",
    "blockchain.add_block(Block::new(previous_hash, transactions));",
    "blockchain.validate_chain()?;",
    "println!(\"Blockchain is valid!\");",
    "let smart_contract = SmartContract::new(",
    "    \"SigmaLabsToken\",",
    "    \"SLT\",",
    "    1000000,",
    "    TokenStandard::Fungible",
    ");",
    "smart_contract.deploy(&client).await?;",
    "println!(\"Smart contract deployed successfully!\");",
  ]

  return (
    <div className="cyberpunk-code-bg">
      {codeLines.map((line, index) => (
        <div key={index} className="code-line">
          {line}
        </div>
      ))}
    </div>
  )
} 