(function(global) {

    function TicTacToe(element) {
        this.root = element;
    }

    TicTacToe.prototype.start = function() {
        this.root.textContent = "Started!!!";
    };

    global.TicTacToe = TicTacToe;

}(this));