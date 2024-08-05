import registerCommands from "./registerCommands";

// Interaction Handler Imports
import pingInteraction from "./interactions/pingInteraction";

const loadDiscord = async (): Promise<void> => {
  registerCommands();

  // Interaction Handlers
  pingInteraction();
};

export default loadDiscord;