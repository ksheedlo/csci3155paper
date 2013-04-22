PANDOC=pandoc

.PHONY: all
all: outline.pdf paper.pdf

%.pdf: %.md
	$(PANDOC) -o $@ $^

.PHONY: clean
clean:
	rm *.pdf
