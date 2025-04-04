# Two-Player-Snake-Game
A 2-player snake game on a 1–100 grid. Players take turns rolling dice to reach 100. Red boxes mark snake heads (fall zones), and dark yellow boxes mark tails. Landing on a red box slides the player down to the tail. A mix of luck and strategy, this game offers engaging, color-coded gameplay with win-by-exact-score logic.

This project is a grid-based, two-player snake game inspired by classic board games like "Snakes and Ladders." It uses a 1 to 100 box layout (10x10 grid) where two players take alternate turns. The primary goal is to reach the 100th square first, but the twist lies in the snakes placed along the way. These snakes are not just visual but also functional — they impact player progress.

The board is visually designed using clear color-coded markers:

🟥 Red represents the snake’s head — landing here causes the player to fall back.

🟫 Dark Yellow marks the snake’s tail — players who land just before this are safe.

Each player rolls a dice (virtually or manually), and the result moves them forward. If a player lands on a snake’s head, they slide down to the snake’s tail, adding excitement and unpredictability. The game continues turn by turn until one of the players reaches exactly 100. If a dice roll exceeds 100, the move is skipped, promoting strategy and luck.

Features:
🎮 Two-player turn-based mode

🧱 1–100 grid layout with easy navigation

🐍 Dynamic snake mechanics with head/tail differentiation

🎲 Dice-roll simulation

🏁 Win condition logic (only exact 100 is a win)

💬 Console-based or GUI-supported gameplay
