class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatriks = [];

        // Inisialisasi matriks adjacency dengan semua nol
        for (let i = 0; i < vertices; i++) {
            let row = [];
            for (let j = 0; j < vertices; j++) {
                row.push(0);
            }
            this.adjMatriks.push(row);
        }
    }

    addEdge(v1, v2) {
        this.adjMatriks[v1][v2] = 1;
        this.adjMatriks[v2][v1] = 1;
    }

    display() {
        for (let i of this.adjMatriks) {
            console.log(i.join(" "));
        }
    }
}

// Membuat objek Graph dan menambahkan edge
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.display();

