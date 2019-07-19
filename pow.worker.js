self.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'pow':
            var res = Math.pow(data.data[0], data.data[1]);
            self.postMessage(res);
            break;
        default:
            self.postMessage('Unknown');
            break;
    }
    self.close();
});
