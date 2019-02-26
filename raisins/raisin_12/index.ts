import { createReadStream } from 'fs';
import { Transform, TransformCallback, Readable } from 'stream';

const randomNum = (array: number[]) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
};

const splitSting = new Transform({
    readableObjectMode: true,

    transform(chunk: any, encoding: string, callback: TransformCallback): void {
        this.push(chunk.toString().split(' '));
        callback();
    }
});

const getRandom = new Transform({
    writableObjectMode: true,

    write(chunk: any[], encoding: string, callback: (error?: (Error | null)) => void): void {
        this.push(randomNum(chunk));
        callback();
    }
});

export const randomFromStream = async (stream: Readable) => {
    return new Promise((resolve) => {
        const a: number[] = [];
        stream.pipe(splitSting).pipe(getRandom)
            .on('data', (random) => {
                a.push(random.toString());
            })
            .on('end', () => {
                resolve(randomNum(a));
            });
    })
};

const s = createReadStream(__dirname + '/large.txt');
randomFromStream(s).then(console.log);