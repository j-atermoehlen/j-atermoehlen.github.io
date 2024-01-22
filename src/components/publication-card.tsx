import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  arxiv?: string;
}

export function PublicationCard({author, title, conference, journal, month, address, vol, year, pages, arxiv, code, preprint}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {
              title
            }
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            {author}
          </CardDescription>
        </div>
      </CardHeader>
      {conference ? (
      <CardDescription className="font-mono text-xs">
        In {conference}, pages {pages}, {address}, {month} {year}
      </CardDescription>) : null}
      {journal ?
      (<CardDescription className="font-mono text-xs">
      {journal}, vol. {vol}, pages {pages}, {month} {year}
    </CardDescription>) : null}
    {preprint ?  
    (<CardDescription className="font-mono text-xs">
      {preprint}, pages {pages}, {month} {year}
    </CardDescription>):null}
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
        {arxiv ? (
        <Badge
              className="px-1 py-0 text-[10px]" 
              variant="secondary"
            >
              <a href={arxiv}>arXiv</a>
        </Badge>
        ) : null}
        {code ? (
        <Badge
              className="px-1 py-0 text-[10px]" 
              variant="secondary"
            >
              <a href={code}>Code</a>
        </Badge>
        ) : null}
        </div>
      </CardContent>
    </Card>
  );
}


