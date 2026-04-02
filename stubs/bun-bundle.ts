export function feature(name: string): boolean {
  // Return false for most features to avoid loading missing internal tools/modules.
  // We can enable specific ones here if we find they are absolutely necessary for the TUI.
  
  const enabledFeatures: string[] = [
    // Add features here if needed for basic startup
    // 'TUI', 
    // 'MCP_SERVER'
  ];

  // Allow manual override via environment variables
  const envVal = process.env[`CLAUDE_CODE_FEATURE_${name}`];
  if (envVal === '1') return true;
  if (envVal === '0') return false;

  return enabledFeatures.includes(name);
}
