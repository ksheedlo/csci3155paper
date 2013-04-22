PANDOC=pandoc

.PHONY: all
all: outline paper

%: %.md
	pandoc -o $@.pdf $^
