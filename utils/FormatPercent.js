const FormatPercent = (value) => {
    switch (value) {
        case 1:
            return 3;
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 20;
        case 5:
            return 25;
    }
};

export default FormatPercent;