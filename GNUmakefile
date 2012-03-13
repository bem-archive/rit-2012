BEMBL_PREFIX = bem-bl

GIT ?= git
GIT_PROTOCOL ?= git

BEMBL_REPO ?= github.com/bem
BEMBL_PATH ?= bem-bl
BEMBL_BRANCH ?= 0.2

$(info $(BEMBL_BRANCH))

DO_GIT=@echo -- git $1 $2; \
	if [[ -d $2 ]]; \
	then \
		cd $2; \
		$(GIT) clone -n -b $(BEMBL_BRANCH) $1 $2.tmp; \
		rm -rf ./.git; \
		mv $2.tmp/.git ./; \
		rm -rf $2.tmp; \
	else \
		$(GIT) clone -b $(BEMBL_BRANCH) $1 $2; \
		cd $2; \
	fi; \
	$(GIT) branch --set-upstream $(BEMBL_BRANCH) origin/$(BEMBL_BRANCH); \
	$(GIT) pull; \
	$(GIT) reset --hard;

.PHONY: bem-bl
bem-bl:
	$(call DO_GIT,$(GIT_PROTOCOL)://$(BEMBL_REPO)/$(BEMBL_PATH).git,$@)

bem-bl/: bem-bl

.PHONY: FORCE
FORCE:

SET_SOURCE = blocks

# Уровни переопределения для примеров (все пути предваряются $(BEMBL_PREFIX))
# $(1) - Путь-префикс: blocks/
# $(2) - Директория уровня страницы: blocks/b-block
# $(3) - Дочерняя директория страницы: blocks/b-block
# $(4) - Директория страницы: blocks/b-block/examples
# $(5) - Префикс для собираемых файлов страницы: blocks/b-block/examples/example-name
EXAMPLE_LEVELS = $(BEMBL_PREFIX)blocks-common \
$(BEMBL_PREFIX)blocks-desktop \
blocks \
$(wildcard $(1)$(5).blocks)

DOC_LEVELS = $(BEMBL_PREFIX)blocks

#include lib/make/sets.mk
