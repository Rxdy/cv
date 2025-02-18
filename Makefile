ENV = dev
option = -d

rund: vscode gitPull up
run: vscode gitPull 
	$(MAKE) up option=

reset: down up

retry: down stop build

up:
	docker compose -f docker-compose.$(ENV).yml up $(option)

gitPull:
	git pull

vscode:
	code .

down:
	docker compose -f docker-compose.$(ENV).yml down

stop:
	docker compose -f docker-compose.$(ENV).yml stop

build:
	docker compose -f docker-compose.$(ENV).yml build