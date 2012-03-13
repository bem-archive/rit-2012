BEMBL_PREFIX = ../../bem-bl/
SET_SOURCE = ../../blocks

# Уровни переопределения для примеров (все пути предваряются $(BEMBL_PREFIX))
# $(1) - Путь-префикс: blocks/
# $(2) - Директория уровня страницы: blocks/b-block
# $(3) - Дочерняя директория страницы: blocks/b-block
# $(4) - Директория страницы: blocks/b-block/examples
# $(5) - Префикс для собираемых файлов страницы: blocks/b-block/examples/example-name
EXAMPLE_LEVELS = $(BEMBL_PREFIX)blocks-common \
$(BEMBL_PREFIX)blocks-desktop \
../../blocks \
$(wildcard $(1)$(5).blocks)

DOC_LEVELS = ../../blocks

include ../../lib/make/sets.mk
