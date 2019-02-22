const sortByName = (table_name) => {
    return table_name.sort( (a, b) => {
            let firstName_A = a.firstName.toUpperCase();
            let firstName_B = b.firstName.toUpperCase(); 
            if (firstName_A < firstName_B) {
                return -1;
            }
            if (firstName_A > firstName_B) {
                return 1;
            }
                // names must be equal
                return 0;
        });
};

const sortByScore = (table_name) => {
    return table_name.sort( (a, b) => {
    let score_A = a.score;
    let score_B = b.score; 
    if (score_A < score_B) {
        return -1;
    }
    if (score_A > score_B) {
        return 1;
    }
        // names must be equal
        return 0;
    }).reverse();

};


exports.mySort = (table_name , { Score }) => {
    if ( Score ){
        sortByScore(table_name);
        return sortByScore(table_name);
    }else {
        return sortByName (table_name);
    }
};