import React from 'react';

import * as purify from 'isomorphic-dompurify';
import { Card } from 'react-bootstrap';

export default function ResultListItem ({ result }) {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title
          dangerouslySetInnerHTML={{
            __html: `${purify.sanitize(result.winery)} ${purify.sanitize(result.variety)}`
          }}
        ></Card.Title>
        <Card.Subtitle
          className='mb-2 text-muted'
        >{result.country} | {result.points} Points | ${result.price}
        </Card.Subtitle>
        <Card.Text dangerouslySetInnerHTML={{ __html: purify.sanitize(result.description) }} />
      </Card.Body>
    </Card>
  );
}
