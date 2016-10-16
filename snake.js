function SnakeGame(pElement, lvlElement, scoreElement, config) {

    /* MAIN */

    if (config.autoInit) {
        this.start();
    }


    /* PUBLIC METHODS */

    this.start = function() {
        engine.startGame();
    };

    this.pause = function() {
        engine.pauseGame();
    };

    this.resume = function() {
        engine.resume();
    };

    this.getScore = function() {
        return engine.getScore();
    };


    /* GAME FUNCTIONS */

    function Engine(pElement, lvlElement, scoreElement) {
        var snake,
            treat,
            inputs,
            stage,
            gameState,
            score;

        this.startGame = function() {
            inputs = new Input(this.pauseGame, this.resumeGame);
            stage = new Stage();
            snake = new Snake();
            score = 0;

            stage.spawnTiles(config.Width, config.Height);
            stage.addItem();
            inputInterface.startListening();
            currentState = eGameStates.STATE_STARTED;
        };

        this.pauseGame = function() {
            if (currentState === constants.STATE_PLAYING) {
                currentState = eGameStates.STATE_PAUSED;
            }
        };

        this.resumeGame = function() {
            if (currentState === constants.STATE_PAUSED) {
                currentState = eGameStates.STATE_STARTED;
            }
        };

        this.getScore = function() {
            return score;
        };
    }

    function Input(pauseGame, resumegame) {

        var keys = [37, 38, 39, 40, 80],
            listening = false,
            lastDir = null;

        this.lastDirection = function() {
            return lastDirection;
        };

        this.startListening = function() {
            if (!listening) {
                window.addEventListener("keydown", handleKeyDown, true);
                window.addEventListener("keypress", disableKeyPress, true);
                window.addEventListener("blur", pauseGame, true); // If the browser loses focus, pause the game
                window.addEventListener("focus", resumegame, true); // As the browser refocuses we resume where we left off
                listening = true;
            }
        };

        this.stopListening = function() {
            if (listening) {
                window.removeEventListener("keydown", handleKeyDown, true);
                window.removeEventListener("keypress", disableKeyPress, true);
                window.removeEventListener("blur", pauseGame, true);
                window.removeEventListener("focus", resumegame, true);
                listening = false;
            }
        };

        var handleKeyDown = function(event) {
            if (keys.indexOf(event.keyCode) >= 0) {
                switch (event.keyCode) {
                    case 37: // ARROW LEFT
                        lastDir = eSnakeDirections.DIR_LEFT;
                        break;
                    case 38: // ARROW UP
                        lastDir = eSnakeDirections.DIR_UP;
                        break;
                    case 39: // ARROW RIGHT
                        lastDir = eSnakeDirections.DIR_RIGHT;
                        break;
                    case 40: //ARROW DOWN
                        lastDir = eSnakeDirections.DIR_DOWN;
                        break;
                    case 80: // 'P' KEy
                        pauseGame();
                        break;
                }
                event.preventDefault(); // Prevent the window from scrolling
            }
        };

        var disableKeyPress = function(event) {
            if (keys.indexOf(event.keyCode) >= 0) {
                event.preventDefault();
            }
        };
    }

    function Util() {
        this.calcGradient = function() {

        }

        this.mergeEnums = function() {

        }
    }


    /* GAME OBJECTS */

    function Snake() {
        var direction = eSnakeDirections.DIR_RIGHT;
        var tiles = [];

        this.move = function() {
            // TODO
        }

        this.spawn = function() {
            // TODO
        }
    }

    function Location(x, y) {

    }

    function Treat() {
        var Loc;

    }

    function Stage() {
        var border = [],
            treats = [];

        this.spawnTiles = function(width, height) {

        }

        this.addItem = function(item, location) {

        }
    }


    /* ENUMS */
    var eGameStates = {
        STATE_MENU,
        STATE_STARTED,
        STATE_PAUSED,
        STATE_ENDED
    }

    var eSnakeDirections = {
        DIR_LEFT,
        DIR_RIGHT,
        DIR_DOWN,
        DIR_UP
    }

    var eConfig = {
        Width: 500,
        Height: 500,
        pointSize: 16,
        snakeHeadTile: "#4b4312",
        snakeLastTile: "#5d6812"
    };
}