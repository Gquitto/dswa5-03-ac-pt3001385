angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
		{"_id": 1, "nome": "Engenharia de Produção", "coord": "fabio.teixeira@ifsp.edu.br"},
	    {"_id": 2, "nome": "Tecnologia em Análise e Desenvolvimento de Sistemas","coord": "fabiano.teixeira@ifsp.edu.br"},
		{"_id": 3, "nome": "Licenciatura em Letras Português/Inglês","coord": "melissa.teixeira@ifsp.edu.br"},
		{"_id": 4, "nome": "Tecnologia em Gestão Pública", "coord": "melissa.teixeira@ifsp.edu.br"}
        ];

        $scope.filtro = '';
});
