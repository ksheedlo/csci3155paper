PANDOC=pandoc

.PHONY: all
all: outline.pdf paper.pdf

%.pdf: %.md
	pandoc -o $@ $^
