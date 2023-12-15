import json
import markovify
import re

from pathlib import Path


PROJECT_ROOT = Path(__file__).parent
RAW_DATA_PATH = PROJECT_ROOT / 'data' / 'raw_data'
READY_DATA_PATH = PROJECT_ROOT / 'data' / 'ready_data'


def get_raw(path):
    """
    :param path: a path to raw_data directory
    :return: absolute paths to raw files
    """
    return [file for file in path.iterdir() if file.is_file()]


def get_text(path):
    """
    :param path: an absolute path to a raw file
    :return: text from a raw file
    """
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


# some text preprocessing steps
def remove_nonbreaking_space(text: str) -> str:
    """
    removal of nonbreaking spaces
    """
    return re.sub('\xa0', ' ', text)


def replace_newlines(text: str) -> str:
    """
    replacement of consecutive line breaks with one break
    """
    return re.sub(r"\n\s*", "\n", text)


def remove_punctuation(text: str) -> str:
    """
    removal of all punctuation marks except period and comma
    """
    punc = ['!', '"', '#', '$', '%', '&', "'", '(',
            ')', '*', '+', '-', '/', ':', ';', '<',
            '=', '>', '?', '@', '[', ']', '^', '_', "…",
            '`', '{', '|', '}', '~', "—", "«", "»", "–"]
    for char in text:
        if char in punc:
            text = text.replace(char, "")
    return text


def clean(text: str) -> str:
    """
    overall function that combines all cleaning steps
    """
    text = remove_nonbreaking_space(text)
    text = replace_newlines(text)
    text = remove_punctuation(text)
    text = text.strip()
    return text


class SentencesByChar(markovify.Text):
    """
    class provided by markovify library
    """
    def word_split(self, sentence):
        return list(sentence)

    def word_join(self, words):
        return "".join(words)


def to_json(sentences):
    with open(f'{READY_DATA_PATH}/ready_data.json', 'w', encoding='utf-8') as f:
        json.dump(sentences, f, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    directories = get_raw(RAW_DATA_PATH)
    abra_tojson = []

    for directory in directories:
        data = get_text(directory)
        data = clean(data)

        abracadabra = []

        # get 5 randomly-generated sentences
        for _ in range(5):
            gen_a_char = SentencesByChar(data, state_size=3)
            abracadabra.append(gen_a_char.make_sentence(test_output=False).replace("\n", " "))

        abra_tojson.append(" ".join(abracadabra))

    to_json(abra_tojson)
