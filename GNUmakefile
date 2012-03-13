all:: bem-bl sets
all:: remove-bom

all:: $(patsubst %.wiki,%.html,$(wildcard *.wiki))

sets: sets/bem-bl-blocks
	echo 'sets'

sets/%: blocks
	make -C $(@) -B

.SECONDEXPANSION:
blocks: $$(wildcard $$@/*)
	echo $@

blocks/%:
	bem create block -T decl.js \
	--force \
	-l blocks $(*F)

%.html: %.bemjson.js %.bemhtml.js %.css %.ie.css %.js
	echo 'xxxxxxxxxxxx'

%.bemjson.js: %.content.bemjson.js
	bem create block -T lib/bem/techs/bemjson.js --force \
	-l . \
	$(*F)

%.content.bemjson.js: %.wiki
	shmakowiki -i $(*F).wiki -o $@ -f bemjson

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

.PHONY: remove-bom
remove-bom:
	find . -name '*.wiki' | xargs sed -i '1 s/^\xef\xbb\xbf//'
	find . -name '*.doc.js' | xargs sed -i '1 s/^\xef\xbb\xbf//'

.PHONY: all sets
